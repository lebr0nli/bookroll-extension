var all_html = document.body.querySelectorAll('li.contents');

for(i=0;i<all_html.length;i++){
    console.log(i);
    all_html[i] = all_html[i].querySelector('div');
    url_str = all_html[i].querySelector('a').href;
    contents_name = all_html[i].querySelector('a').innerHTML;
    if (typeof (all_html[i].querySelectorAll('a')[1])=='undefined'){
        contents = new URL(url_str).searchParams.get('contents');
        append_onclick = "return PdfOutPuttingDialog('"+contents+"','"+contents_name+"');";
        elem = document.createElement("a");
        elem.setAttribute('href','#');
        elem.setAttribute('onclick',append_onclick);
        elem.innerHTML = 'PDF Download';
        document.body.querySelectorAll('li.contents')[i].querySelector('div').appendChild(elem);
        console.log(elem);
        console.log(append_onclick)}
}