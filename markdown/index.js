const fs = require('fs');
const path = require('path');
const hljs = require('highlight.js');
const YFM = require('yaml-front-matter');

// 语法高亮
const md = require('markdown-it')({
	html: true,
	highlight(str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(str, { language: lang }).value;
			} catch (__) {}
		}
		return '';
	}
});

// 读取.md文件
const articleFileDir = path.resolve(__dirname, `./article`);
const articleList = fs.readdirSync(articleFileDir).map(item => {
	const article = fs.readFileSync(`${articleFileDir}/${item}`).toString();
	const meta = YFM.loadFront(article);
	return {
		name: item,
		title: meta.title,
		description: meta.description,
		content: md.render(meta.__content)
	}
});

// 输出文件
const articleListStr = JSON.stringify(articleList, undefined, '\t').replace(/"(\w+)":/g, '$1:').replace(/"/g, '\'');
const articleListData = `export default ${articleListStr};\n`;
const outputPath = path.resolve(__dirname, `./dist`);
if (!fs.existsSync(outputPath)) {
	fs.mkdirSync(outputPath);
}
fs.writeFileSync(`${outputPath}/articleList.js`, articleListData);
