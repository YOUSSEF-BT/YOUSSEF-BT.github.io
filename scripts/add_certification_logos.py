from pathlib import Path
import re

page = Path('src/pages/CertificationsPage.jsx')
home = Path('src/sections/Certifications.jsx')
page_text = page.read_text()
home_text = home.read_text()

logo_helper = '''
const issuerLogoDomains = {
  "Oracle": "oracle.com",
  "Anthropic": "anthropic.com",
  "LinkedIn": "linkedin.com",
  "LinkedIn Learning Community": "linkedin.com",
  "IBM Cognitive Class": "ibm.com",
  "OpenCV University": "opencv.org",
  "KNIME": "knime.com",
  "Anaconda": "anaconda.com",
};

export const CertificationIssuerLogo = ({ issuer }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const domain = issuerLogoDomains[issuer];

  if (!domain || logoFailed) {
    return <Award className="w-6 h-6 text-primary" />;
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${issuer} logo`}
      className="w-7 h-7 md:w-8 md:h-8 object-contain rounded-md"
      onError={() => setLogoFailed(true)}
      decoding="async"
    />
  );
};
'''

anchor = 'import { Link } from "react-router-dom";\n'
if 'const issuerLogoDomains =' not in page_text:
    if anchor not in page_text:
        raise RuntimeError('Could not find import anchor in CertificationsPage.jsx')
    page_text = page_text.replace(anchor, anchor + logo_helper + '\n', 1)

old_badge = '''<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">{cert.icon}</div>
                    </div>'''
new_badge = '''<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                      <CertificationIssuerLogo issuer={cert.issuer} />
                    </div>'''

if old_badge not in page_text:
    raise RuntimeError('Certification badge markup not found in CertificationsPage.jsx')
page_text = page_text.replace(old_badge, new_badge)

old_import = 'import { certificationsNewestFirst } from "@/pages/CertificationsPage";'
new_import = 'import { certificationsNewestFirst, CertificationIssuerLogo } from "@/pages/CertificationsPage";'
if old_import in home_text:
    home_text = home_text.replace(old_import, new_import, 1)
elif new_import not in home_text:
    raise RuntimeError('Homepage certification import not found')

old_home_badge = '''<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{cert.icon}</div>
                  </div>'''
new_home_badge = '''<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-1.5 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                    <CertificationIssuerLogo issuer={cert.issuer} />
                  </div>'''

count = home_text.count(old_home_badge)
if count != 2:
    raise RuntimeError(f'Expected 2 homepage badge blocks, found {count}')
home_text = home_text.replace(old_home_badge, new_home_badge)

page.write_text(page_text)
home.write_text(home_text)

# Validate that every current issuer has a mapped logo.
issuers = sorted(set(re.findall(r'\n    issuer: "([^"]+)",', page_text)))
mapped = {
    'Oracle', 'Anthropic', 'LinkedIn', 'LinkedIn Learning Community',
    'IBM Cognitive Class', 'OpenCV University', 'KNIME', 'Anaconda'
}
unknown = [issuer for issuer in issuers if issuer not in mapped]
if unknown:
    raise RuntimeError(f'Issuers without logo mapping: {unknown}')

if '{cert.icon}' in home_text:
    raise RuntimeError('Homepage still renders generic certification icons')

print('Certification issuer logos added for:', ', '.join(issuers))
