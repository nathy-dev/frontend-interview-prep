const tabs = Array.from(document.querySelectorAll('button'));
const contents = Array.from(document.querySelectorAll('.tabs__content'));

const tabContentsMap = new Map();

for(let i = 0; i < tabs.length; i++ ){
    tabContentsMap.set(tabs[i], contents[i]);
}
console.log(tabContentsMap)

tabs.forEach(tab => tab.addEventListener('click', handleTabClick))

function handleTabClick(e) {
    const currTab = e.target;
    currTab.classList.add('active');
    tabs.filter(tab => tab !== currTab).forEach(tab => {
        if(tab.classList.contains('active')) tab.classList.remove('active')
    });
    const currContent = tabContentsMap.get(currTab);
    if(currContent.classList.contains('inactive')) currContent.classList.remove('inactive')
    contents.filter(content => content !== currContent).forEach(content => content.classList.add('inactive'))
}