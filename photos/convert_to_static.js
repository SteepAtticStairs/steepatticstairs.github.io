const fs = require('fs');
const photo_info = require('./photo_info');
const jsdom = require('jsdom');
const path = require('path');
const { JSDOM } = jsdom;

const template_text = fs.readFileSync(path.join(__dirname, './template.html'), 'utf8');
const dom = new JSDOM(template_text);
const document = dom.window.document;

function format_local_url(url) {
    return url.replace('..', 'https://steepatticstairs.net/photos');
}

for (const item in photo_info) {
    document.getElementById('main_image').setAttribute('src', '');
    document.getElementById('main_image').style.display = 'none';
    document.getElementById('main_video').setAttribute('src', '');
    document.getElementById('main_video').style.display = 'none';

    const photo = photo_info[item];
    document.getElementById('title').innerHTML = photo.title;
    document.getElementById('title_lesser').innerHTML = photo.title_lesser;
    document.getElementById('description').innerHTML = photo.description;

    document.querySelector('meta[name="description"]').setAttribute("content", `E.A. Lawlor - ${photo.title_lesser}`);
    document.title = `E.A. Lawlor - ${photo.title_lesser}`;
    document.querySelector('meta[property="og:title"]').setAttribute('content', photo.title_lesser);

    var img_id = 'main_image';
    if (photo.hasOwnProperty('thumb')) {
        img_id = 'main_video';
        document.getElementById(img_id).style.width = '10000px';
        document.getElementById(img_id).style.height = '10000px';

        document.querySelector('meta[property="og:image"]').setAttribute('content', format_local_url(photo.thumb));
    } else {
        document.querySelector('meta[property="og:image"]').setAttribute('content', format_local_url(photo.img));
    }
    document.getElementById(img_id).setAttribute('src', photo.img);
    document.getElementById(img_id).style.display = 'block';

    var formatted_metadata = ''
    for (var i = 0; i < photo.metadata.length; i++) {
        formatted_metadata += `<b class="metadata_bold">${photo.metadata[i][0]}:</b> ${photo.metadata[i][1]}<br>`
    }
    document.getElementById('metadata').innerHTML = formatted_metadata;

    const finished_html = dom.serialize();
    const newfilename = `${item}.html`;
    fs.writeFileSync(path.join(__dirname, `./static/${newfilename}`), finished_html);
    console.log(`Created ${newfilename}`);
}