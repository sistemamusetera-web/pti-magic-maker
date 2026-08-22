from pathlib import Path

from PIL import Image


ASSETS = Path("/home/ubuntu/webdev-static-assets")
logo = Image.open(ASSETS / "hapvida-notredame-reference-000.png").convert("RGB")
mask = Image.open(ASSETS / "hapvida-notredame-reference-001.png").convert("L")

background = Image.new("RGB", logo.size, "white")
background.paste(logo, mask=mask)
background.save(ASSETS / "hapvida-notredame-reference-white.png", "PNG")
