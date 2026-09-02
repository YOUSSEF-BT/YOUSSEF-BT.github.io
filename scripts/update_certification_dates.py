from pathlib import Path

files = [
    Path("src/pages/CertificationsPage.jsx"),
    Path("src/data/certifications.js"),
]

for path in files:
    text = path.read_text()
    old = 'date: "2026"'
    count = text.count(old)
    if count == 0:
        print(f"No year-only 2026 dates found in {path}")
        continue
    text = text.replace(old, 'date: "May 2026"')
    path.write_text(text)
    print(f"Updated {count} year-only certification dates in {path}")
