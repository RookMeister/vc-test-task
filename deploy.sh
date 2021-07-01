# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd docs

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:rookmeister/<vc-test-task>.git main:gh-pages

cd -