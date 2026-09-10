from pathlib import Path

replacements = {
    Path("src/pages/CertificationsPage.jsx"): (
        '''          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">\n            🎓 Certifications\n          </span>''',
        '''          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] animate-fade-in">\n            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />\n            Certifications\n          </div>''',
    ),
    Path("src/pages/Demos.jsx"): (
        '''          <span className="text-secondary-foreground text-xs md:text-sm font-medium tracking-wider uppercase animate-fade-in">\n            💻 Project Demos\n          </span>''',
        '''          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] animate-fade-in">\n            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />\n            Project Demos\n          </div>''',
    ),
}

skills = Path("src/pages/Skills.jsx").read_text()
reference = 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] animate-fade-in'
if reference not in skills:
    raise SystemExit("Skills title badge reference style not found; aborting")

for path, (old, new) in replacements.items():
    text = path.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{path}: expected exactly one old title block, found {count}")
    path.write_text(text.replace(old, new, 1))

print("Certifications and Project Demos title badges now match AI Engineering Skills design.")
