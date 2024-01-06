shopt -s extglob
hexo clean
rm ./source/_posts/*
cd ../SakuraGw_Kotoko/
rm -rf !(favicon.ico|README.md)
cp -r /d/notable/attachments ./@attachment
cd ../Hexoco
cp -r /d/notable/notes/. ./source/_drafts/.
node mw.js
hexo g
cp -r ./public/. ../SakuraGw_Kotoko/.
cd ../SakuraGw_Kotoko
git add .
git commit -m "commit on `date +"%Y-%m-%d %H:%M.%S"`"
git push