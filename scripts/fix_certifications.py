from pathlib import Path
import re
from urllib.parse import unquote

page = Path('src/pages/CertificationsPage.jsx')
home = Path('src/sections/Certifications.jsx')
text = page.read_text()


def cert_block(source, cert_id):
    pattern = re.compile(r'  \{\n    id: ' + str(cert_id) + r',\n.*?\n  \},\n', re.S)
    match = pattern.search(source)
    if not match:
        raise RuntimeError(f'Certification id {cert_id} not found')
    return match


def replace_field(source, cert_id, field, value):
    match = cert_block(source, cert_id)
    block = match.group(0)
    pattern = re.compile(r'    ' + re.escape(field) + r': ".*?",\n')
    if not pattern.search(block):
        raise RuntimeError(f'Field {field} not found for id {cert_id}')
    block = pattern.sub(f'    {field}: "{value}",\n', block, count=1)
    return source[:match.start()] + block + source[match.end():]


# 1) Remove the unverified Hugging Face course card from Certifications.
# It points to a course landing page, not to a personal issued credential, and no issue month is documented.
match = cert_block(text, 22)
text = text[:match.start()] + text[match.end():]

# 2) Correct inaccurate description.
text = replace_field(
    text,
    6,
    'description',
    'Training focused on understanding AI capabilities, limitations, reliability boundaries, failure modes, and responsible use of AI systems.'
)

# 3) Correct issuers to match the user-provided LinkedIn certification records.
for cert_id, issuer in {
    31: 'LinkedIn Learning Community',
    32: 'LinkedIn Learning Community',
    34: 'LinkedIn',
    36: 'LinkedIn',
    101: 'LinkedIn',
}.items():
    text = replace_field(text, cert_id, 'issuer', issuer)

# 4) Use official certificate titles (remove marketing FREE prefix).
text = replace_field(text, 23, 'title', 'OpenCV Bootcamp')
text = replace_field(text, 24, 'title', 'Vision Language Models (VLM) Bootcamp')

# 5) Correct topical categories.
text = replace_field(text, 25, 'category', 'machine-learning-dl')
text = replace_field(text, 26, 'category', 'machine-learning-dl')
text = replace_field(text, 35, 'category', 'prompt-engineering')

# 6) Replace legacy Anthropic portfolio PDF routes with direct Skilljar verification URLs.
skilljar = {
    5: '669dhjfv4jgt',
    6: '5wfw9hexvaax',
    7: 'qettazf8qd36',
    8: '66qabf9vriu9',
    9: 'b9sh9wj2tb6b',
    10: 'nr75vo6xp889',
    11: 'p44jhhdgju3z',
    12: 'nm4fhq8fjw3j',
    13: '7eahci6bmgxb',
    14: 'wy7mgcgom536',
    15: 'mmyj2epvatui',
    16: 'twqnruaazwjq',
    17: 'hkxuzh9i8mbd',
    18: 'pramdigjasq9',
    19: 'rkepkwh37idh',
    20: 'tharwi7o229k',
    21: 'gmxxb5rt47dw',
}
for cert_id, credential in skilljar.items():
    text = replace_field(text, cert_id, 'link', f'https://verify.skilljar.com/c/{credential}')

# 7) Make Anthropic a provider filter as well as a topical category.
old_count = """    } else {\n      acc[cat.id] = certifications.filter(cert => cert.category === cat.id).length;\n    }\n"""
new_count = """    } else if (cat.id === 'anthropic') {\n      acc[cat.id] = certifications.filter(cert => cert.issuer === 'Anthropic').length;\n    } else {\n      acc[cat.id] = certifications.filter(cert => cert.category === cat.id).length;\n    }\n"""
if old_count not in text:
    raise RuntimeError('Category count block not found')
text = text.replace(old_count, new_count, 1)

old_match = """    const matchesCategory =\n      selectedCategory === \"all\" || cert.category === selectedCategory;\n"""
new_match = """    const matchesCategory =\n      selectedCategory === \"all\" ||\n      (selectedCategory === \"anthropic\"\n        ? cert.issuer === \"Anthropic\"\n        : cert.category === selectedCategory);\n"""
if old_match not in text:
    raise RuntimeError('Category matching block not found')
text = text.replace(old_match, new_match, 1)

# 8) Remove dead special PDF-card rendering. No certification uses pdfLink anymore.
start_marker = '              cert.pdfLink ? ('
end_marker = '              ) : cert.link ? ('
if start_marker in text:
    start = text.index(start_marker)
    end = text.index(end_marker, start) + len(end_marker)
    text = text[:start] + '              cert.link ? (' + text[end:]

page.write_text(text)

# 9) Keep homepage wording aligned with date-based sorting.
home_text = home.read_text()
home_text = home_text.replace(
    '// Always show the 4 most recently added certifications, newest first.',
    '// Always show the 4 most recent certifications, newest first.'
)
home.write_text(home_text)

# 10) Remove obsolete duplicate source and unused blurry Oracle PDF.
obsolete = [
    Path('src/data/certifications.js'),
    Path('public/documents/Oracle_Agentic_AI_Certified_Foundations_Associate.pdf'),
]
for path in obsolete:
    if path.exists():
        path.unlink()
        print(f'Removed obsolete file: {path}')

# Validation: no legacy Anthropic URLs, no pdfLink, no duplicate IDs/titles,
# all local document links resolve, and all categories are recognized.
updated = page.read_text()
if '/Portfolio-Youssef-Bouzit/documents/certificate-' in updated:
    raise RuntimeError('Legacy Anthropic certificate route still present')
if 'pdfLink:' in updated:
    raise RuntimeError('pdfLink data still present')

ids = re.findall(r'\n    id: (\d+),', updated)
if len(ids) != len(set(ids)):
    raise RuntimeError('Duplicate certification IDs found')

titles = re.findall(r'\n    title: "([^"]+)",', updated)
if len(titles) != len(set(titles)):
    raise RuntimeError('Duplicate certification titles found')

allowed_categories = {
    'data-science', 'machine-learning-dl', 'computer-vision',
    'agentic-ai-llms', 'anthropic', 'prompt-engineering'
}
for category in re.findall(r'\n    category: "([^"]+)",', updated):
    if category not in allowed_categories:
        raise RuntimeError(f'Unknown category: {category}')

for raw in re.findall(r'link: `\$\{import\.meta\.env\.BASE_URL\}documents/([^`]+)`', updated):
    local = Path('public/documents') / unquote(raw)
    if not local.exists():
        raise RuntimeError(f'Missing local certificate document: {local}')

print(f'Certification audit fixes applied successfully. Visible certifications: {len(ids)}')
