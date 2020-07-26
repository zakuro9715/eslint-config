#!/usr/bin/zsh

do-update() {
  basedir=$PWD
  opt=$1
  pkg=$2

  cd "$basedir/packages/$pkg"
  if [[ "$opt" == '--dry-run' ]]
  then
    ncu
  else
    ncu -u
    npm install --package-lock-only
  fi
  cd $basedir
}

check-opt() {
  if [[ -n "$1" ]] && [[ "$1" != '--dry-run' ]]
  then
    echo "Usage: update-packages.zsh [--dry-run]" >&2
    exit 1
  fi
}

opt="$1"
check-opt $opt

do-update "$opt" .
for pkg in $(ls packages)
do
  do-update "$opt" "$pkg"
done
