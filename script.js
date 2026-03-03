const loadLessons = () => {
    const url = 'https://openapi.programming-hero.com/api/levels/all'

    fetch(url)
        .then(res => res.json())
        .then(json => setData(json.data))
}
loadLessons()

const setData = (lessions) => {
    const lessionDiv = document.getElementById('lessions')
    lessions.forEach(lesson => {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
                             <a class="btn btn-outline btn-secondary">
                            <i class="fa-solid fa-book-open"></i>
                            Learn- ${lesson.level_no} </a>
        `
        lessionDiv.append(btnDiv)

    });





}
