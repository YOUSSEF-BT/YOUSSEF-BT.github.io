from pathlib import Path

targets = [
    Path("src/pages/CertificationsPage.jsx"),
    Path("src/pages/Demos.jsx"),
]

old = 'className="min-h-screen overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20"'
new = 'className="min-h-screen overflow-hidden pt-20 md:pt-24 pb-16 md:pb-20"'

skills = Path("src/pages/Skills.jsx").read_text()
if 'pt-20 md:pt-24' not in skills:
    raise SystemExit("Skills reference top spacing was not found; aborting alignment")

for path in targets:
    text = path.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly 1 page-padding match, found {count}")
    path.write_text(text.replace(old, new, 1))

print("Certifications and Projects/Demos now use the same top spacing as Skills.")
