from pathlib import Path

path = Path("src/pages/CertificationsPage.jsx")
text = path.read_text()
old = "const certifications = ["
new = "export const certifications = ["
if old in text:
    text = text.replace(old, new, 1)
elif new not in text:
    raise RuntimeError("certifications declaration not found")
path.write_text(text)
