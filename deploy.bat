
cd dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:miguel-apg/vuegaman.git master:gh-pages

cd ..