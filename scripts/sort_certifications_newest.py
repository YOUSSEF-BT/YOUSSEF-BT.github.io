from pathlib import Path

page_path = Path("src/pages/CertificationsPage.jsx")
section_path = Path("src/sections/Certifications.jsx")

page = page_path.read_text()

sort_block = r'''const CERTIFICATION_MONTHS = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// Precise ordering for certificates issued in the same month.
// This preserves the real recency order requested for the August 2026 additions.
const certificationRecencyOverrides = {
  113: Date.UTC(2026, 8, 1),
  112: Date.UTC(2026, 7, 30),
  102: Date.UTC(2026, 7, 29),
  103: Date.UTC(2026, 7, 28),
  104: Date.UTC(2026, 7, 27),
  105: Date.UTC(2026, 7, 26),
  106: Date.UTC(2026, 7, 25),
  107: Date.UTC(2026, 7, 24),
};

const getCertificationRecency = (cert) => {
  if (certificationRecencyOverrides[cert.id]) {
    return certificationRecencyOverrides[cert.id];
  }

  const issuedDate = cert.date.split("·")[0].trim();
  const monthYear = issuedDate.match(/^([A-Z][a-z]{2})\s+(\d{4})$/);
  if (monthYear && CERTIFICATION_MONTHS[monthYear[1]] !== undefined) {
    return Date.UTC(Number(monthYear[2]), CERTIFICATION_MONTHS[monthYear[1]], 1);
  }

  const yearOnly = issuedDate.match(/^(\d{4})$/);
  if (yearOnly) {
    return Date.UTC(Number(yearOnly[1]), 0, 1);
  }

  return 0;
};

export const certificationsNewestFirst = [...certifications].sort(
  (a, b) => getCertificationRecency(b) - getCertificationRecency(a)
);
'''

if "export const certificationsNewestFirst" not in page:
    anchor = "];\n\nconst categories = ["
    if anchor not in page:
        raise RuntimeError("Could not find categories anchor in CertificationsPage.jsx")
    page = page.replace(anchor, "];\n\n" + sort_block + "\nconst categories = [", 1)

old_filter = "const filteredCertifications = certifications.filter((cert) => {"
new_filter = "const filteredCertifications = certificationsNewestFirst.filter((cert) => {"
if old_filter in page:
    page = page.replace(old_filter, new_filter, 1)
elif new_filter not in page:
    raise RuntimeError("Could not find certifications filter in CertificationsPage.jsx")

page_path.write_text(page)

section = section_path.read_text()
old_import = 'import { certifications } from "@/pages/CertificationsPage";'
new_import = 'import { certificationsNewestFirst } from "@/pages/CertificationsPage";'
if old_import in section:
    section = section.replace(old_import, new_import, 1)
elif new_import not in section:
    raise RuntimeError("Could not find certifications import in homepage section")

old_display = "const displayedCerts = certifications.slice(-4).reverse();"
new_display = "const displayedCerts = certificationsNewestFirst.slice(0, 4);"
if old_display in section:
    section = section.replace(old_display, new_display, 1)
elif new_display not in section:
    raise RuntimeError("Could not find displayedCerts logic in homepage section")

section_path.write_text(section)
