# Generates social/profile images from the source brand-mark SVGs in this
# directory.
#
# `make linkedin` produces 300x300 PNGs of the graphic mark only
# (no wordmark), centered with 20px of padding on every edge
# (260x260 inner content):
#   light-logo-linkedin.png   for use on light backgrounds (white background)
#   dark-logo-linkedin.png    for use on dark backgrounds (transparent background)
#
# `make linkedin-cover` rasterizes the three LinkedIn company-page cover
# proposals (1128x191 PNG, ~5.91:1) from their source SVGs:
#   linkedin-cover-blueprint.png
#   linkedin-cover-terminal.png
#   linkedin-cover-core.png
#
# `make email` produces a PNG of the full logo on a white card with rounded
# corners (transparent outside the corners), suited to email signatures
# (uses the light-mode source):
#   email-signature-logo.png
#
# `make all` (default) produces every group.
#
# The `linkedin`/`linkedin-cover` targets require `xmlstarlet`,
# `rsvg-convert` (librsvg), and `magick` (ImageMagick) on PATH:
#   brew install xmlstarlet librsvg imagemagick
# The `email` target needs only `rsvg-convert` (librsvg).
#
# Generated outputs are gitignored — edit the source SVGs and re-run `make`.

SHELL := /bin/bash

SOURCES  := light-logo.svg dark-logo.svg
LINKEDIN := $(SOURCES:.svg=-linkedin.png)

# The source SVGs organize their child elements into two named groups:
#   <g id="graphic">   - the brand-mark glyph (kept for the LinkedIn image)
#   <g id="wordmark">  - the "BSF5Y" text (stripped for the LinkedIn image)
WORDMARK_GROUP := wordmark

# Profile-image: 300x300 canvas with 20px padding -> 260x260 inner.
# Background is per-target (white for light, transparent for dark).
CANVAS := 300
INNER  := 260

# High-resolution intermediate render — oversample, then let `magick -trim`
# detect the graphic mark's bounding box from rendered pixels (more robust
# than hand-measuring the SVG coordinate space).
RENDER_W := 2000

# LinkedIn company page cover: 1128 x 191 (~5.91:1).
# Source SVGs already include their own internal padding from the canvas
# edge; no extra padding pass is needed — rasterize at the target size.
COVER_W := 1128
COVER_H := 191

COVER_SOURCES := $(wildcard linkedin-cover-*.svg)
COVERS        := $(COVER_SOURCES:.svg=.png)

# Email-signature card: the full logo on a white, rounded-corner background.
# Derived from the light-mode source (baked light colors read well on white).
# The source content occupies viewBox "301 210 1654 546"; we nest it inside a
# padded outer canvas without altering the source geometry, then rasterize.
EMAIL_OUTPUT  := email-signature-logo.png
EMAIL_SOURCE  := light-logo.svg
EMAIL_CONTENT_W := 1654
EMAIL_CONTENT_H := 546
EMAIL_PAD       := 120
EMAIL_RADIUS    := 72
EMAIL_W := $(shell echo $$(($(EMAIL_CONTENT_W) + 2 * $(EMAIL_PAD))))
EMAIL_H := $(shell echo $$(($(EMAIL_CONTENT_H) + 2 * $(EMAIL_PAD))))
# Output raster width (height scales to preserve aspect).
EMAIL_PNG_W := $(EMAIL_W)

.PHONY: all linkedin linkedin-cover email clean check-tools

all: linkedin linkedin-cover email

linkedin: $(LINKEDIN)

linkedin-cover: $(COVERS)

email: $(EMAIL_OUTPUT)

check-tools:
	@for tool in xmlstarlet rsvg-convert magick; do \
	  command -v $$tool >/dev/null || { \
	    echo "error: missing '$$tool' (try: brew install xmlstarlet librsvg imagemagick)"; \
	    exit 1; \
	  }; \
	done

light-logo-linkedin.png: BACKGROUND := white
dark-logo-linkedin.png:  BACKGROUND := none

%-logo-linkedin.png: %-logo.svg Makefile | check-tools
	@xmlstarlet ed -N s=http://www.w3.org/2000/svg \
	    -d "//s:g[@id='$(WORDMARK_GROUP)']" $< \
	  | rsvg-convert -w $(RENDER_W) \
	  | magick - -trim +repage \
	      -resize $(INNER)x$(INNER) \
	      -background $(BACKGROUND) -gravity center -extent $(CANVAS)x$(CANVAS) \
	      $@
	@echo "  ✓ $@"

linkedin-cover-%.png: linkedin-cover-%.svg Makefile | check-tools
	@rsvg-convert -w $(COVER_W) -h $(COVER_H) $< -o $@
	@echo "  ✓ $@"

# Wrap the unmodified source SVG (nested as a child <svg> at the padded
# offset) in a white rounded-rect card, then rasterize to PNG. `tail -n +2`
# drops the source's XML declaration so it nests cleanly mid-document.
# Area outside the rounded corners stays transparent.
$(EMAIL_OUTPUT): $(EMAIL_SOURCE) Makefile
	@{ \
	  echo '<?xml version="1.0" encoding="UTF-8"?>'; \
	  echo '<svg xmlns="http://www.w3.org/2000/svg" width="$(EMAIL_W)" height="$(EMAIL_H)" viewBox="0 0 $(EMAIL_W) $(EMAIL_H)">'; \
	  echo '  <rect x="0" y="0" width="$(EMAIL_W)" height="$(EMAIL_H)" rx="$(EMAIL_RADIUS)" ry="$(EMAIL_RADIUS)" fill="#ffffff"/>'; \
	  echo '  <g transform="translate($(EMAIL_PAD),$(EMAIL_PAD))">'; \
	  tail -n +2 $<; \
	  echo '  </g>'; \
	  echo '</svg>'; \
	} | rsvg-convert -w $(EMAIL_PNG_W) -o $@
	@echo "  ✓ $@"

clean:
	rm -f $(LINKEDIN) $(COVERS) $(EMAIL_OUTPUT)
