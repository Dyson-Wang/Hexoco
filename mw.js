const fs = require('fs');

let dir = fs.readdirSync('./source/_drafts/.')

for (let i = 0; i < dir.length; i++) {
    const ele = dir[i];
    let c = fs.readFileSync('./source/_drafts/' + ele, 'utf8')
    let date = new Date(c.match(/created: '(.*)'/)[1]).toLocaleString()
    let updated = new Date(c.match(/modified: '(.*)'/)[1]).toLocaleString()
    let arr = c.split('---')
    let data = '---\n'+"date: '"+date+"'\n"+"updated: '"+updated+"'\n"+"academia: true"+"\n"+arr[1]+'---'+arr[2]
    fs.writeFileSync('./source/_posts/'+ele, data)
    fs.rmSync('./source/_drafts/' + ele)
}