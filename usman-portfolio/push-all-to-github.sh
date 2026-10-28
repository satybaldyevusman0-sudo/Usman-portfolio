#!/usr/bin/env bash
# Бул скрипт "эгзамен" папкасындагы ар бир долбоорду өзүнчө GitHub репо кылып чыгарат.
# Колдонуу (VS Code -> Terminal -> Git Bash):
#   1) GitHub CLI орнотуңуз: https://cli.github.com  жана бир жолу:  gh auth login
#   2) Бул файлды "эгзамен" папкасына салыңыз
#   3) bash push-all-to-github.sh
set -e
for dir in */ ; do
  name=$(basename "$dir" | tr '[:upper:] ' '[:lower:]-')
  echo "==> $name"
  cd "$dir"
  if [ ! -d .git ]; then
    git init -q
    git add .
    git commit -qm "Initial commit"
    git branch -M main
  fi
  if ! git remote | grep -q origin; then
    gh repo create "$name" --public --source=. --remote=origin --push \
      || echo "!! $name: мындай репо бар же ката чыкты, өткөрүп жибердим"
  else
    git push -u origin main || true
  fi
  cd ..
done
echo "Даяр! Реполоруңузду текшериңиз: gh repo list"
