#!/usr/bin/env bash
#
# Downloads the photographs from the existing bbsrstone.com site into
# public/images/, keeping the same folder structure the code expects.
#
# Run once after cloning:
#     npm run fetch:assets
#
# Existing files are skipped, so it is safe to re-run. Use --force to
# re-download everything.
#
set -uo pipefail

SOURCE="${SOURCE_ORIGIN:-https://bbsrstone.com}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="$ROOT/public/images"
FORCE=0
[[ "${1:-}" == "--force" ]] && FORCE=1

if ! command -v curl >/dev/null 2>&1; then
  echo "error: curl is required." >&2
  exit 1
fi

# ── Image manifest ──────────────────────────────────────────────────────
paths=(
  "logos/logo1.png"
  "about-img.jpg"
  "about1.jpg"
  "profile-1.jpg"
  "profile-3.jpg"
  "profile-7.jpg"
)

for i in 1 2 3 4 5;            do paths+=("slides/slider-0$i.jpg"); done
for i in $(seq 1 9);           do paths+=("chips/chips$i.jpg");     done
for i in $(seq 1 7);           do paths+=("stone/stone$i.jpg");     done
for i in $(seq 1 12);          do paths+=("metal/metal$i.jpg");     done
for i in 1 2 3;                do paths+=("excavator/excav$i.jpg"); done
for i in 1 2 3;                do paths+=("excavator/jcb$i.jpg");   done
for i in $(seq 1 20);          do paths+=("office/gallery$i.jpg");  done

total=${#paths[@]}
ok=0; skipped=0; failed=0
failures=()

echo "Fetching $total images from $SOURCE into public/images …"
echo

for rel in "${paths[@]}"; do
  out="$DEST/$rel"
  mkdir -p "$(dirname "$out")"

  if [[ -s "$out" && $FORCE -eq 0 ]]; then
    skipped=$((skipped + 1))
    continue
  fi

  if curl -fsSL --max-time 45 --retry 2 --retry-delay 1 \
       -A "Mozilla/5.0 (asset-migration)" \
       -o "$out.part" "$SOURCE/images/$rel" 2>/dev/null \
     && [[ -s "$out.part" ]]; then
    mv -f "$out.part" "$out"
    ok=$((ok + 1))
    printf '  \033[32m✓\033[0m %s\n' "$rel"
  else
    rm -f "$out.part"
    failed=$((failed + 1))
    failures+=("$rel")
    printf '  \033[31m✗\033[0m %s\n' "$rel"
  fi
done

echo
echo "Downloaded: $ok   Already present: $skipped   Failed: $failed"

if (( failed > 0 )); then
  echo
  echo "These could not be fetched — drop the final photographs in by hand,"
  echo "or leave them and the site will show a neutral placeholder tile:"
  printf '  - public/images/%s\n' "${failures[@]}"
fi

echo
echo "Done. Start the site with: npm run dev"
