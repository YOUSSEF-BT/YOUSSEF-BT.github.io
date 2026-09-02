from pathlib import Path

NEW_CERT = '''  {
    id: 113,
    title: "Oracle AI Database Certified Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2026 · Expires Sep 2028",
    credentialId: "7022BC9CA3F2FE2B58B4706AE7646E5212D5D17F87BAA6D5A3E1B137AF38CE50",
    description: "Foundational certification in Oracle AI Database, covering core concepts for AI-enabled database technologies, data management, and AI-oriented database capabilities.",
    icon: <Award className="w-6 h-6" />,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7022BC9CA3F2FE2B58B4706AE7646E5212D5D17F87BAA6D5A3E1B137AF38CE50",
    category: "data-science",
  },
'''

for filename in ("src/pages/CertificationsPage.jsx", "src/data/certifications.js"):
    path = Path(filename)
    text = path.read_text()
    text = text.replace(
        '    pdfLink: `${import.meta.env.BASE_URL}documents/Oracle_Agentic_AI_Certified_Foundations_Associate.pdf`,\n',
        "",
    )
    if 'id: 113,' not in text:
        anchor = '    category: "agentic-ai-llms",\n  },\n];'
        if anchor not in text:
            raise RuntimeError(f"Insertion anchor not found in {filename}")
        text = text.replace(
            anchor,
            '    category: "agentic-ai-llms",\n  },\n' + NEW_CERT + '];',
            1,
        )
    path.write_text(text)

css_path = Path("src/index.css")
css = css_path.read_text()
marker = "\n/* Oracle:"
if marker in css:
    css = css.split(marker, 1)[0].rstrip() + "\n"
    css_path.write_text(css)
