const loadLessons = () => {
    const url = 'https://openapi.programming-hero.com/api/levels/all'

    fetch(url)
        .then(res => res.json())
        .then(json => setData(json.data))
}
loadLessons()

const setData = (lessions) => {
    const lessionDiv = document.getElementById('lessions')
    lessionDiv.innerHTML = ''
    lessions.forEach(lesson => {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
                             <button onclick = "btnCard(${lesson.level_no})" class="btn btn-outline btn-secondary">
                            <i class="fa-solid fa-book-open"></i>
                            Learn- ${lesson.level_no} </button>
        `
        lessionDiv.append(btnDiv)
    });
}

const btnCard = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(json => displayLevelWord(json.data))
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('wordContainer')
    wordContainer.innerHTML = ''
    words.forEach(word => {
        const wordDiv = document.createElement('div')
        wordDiv.innerHTML = `
         <div class=" bg-gray-100 p-1 h-full">
            <div class="flex flex-col gap-5 justify-between h-full w-full max-w-lg  bg-white  rounded-sm shadow-sm p-4 ">
                <div class="text-center space-y-5 ">
                    <h1 class="text-xl font-bold text-black ">${word.word} </h1>

                    <p class="text-sm font-medium text-black "> Meaning / Pronounciation</p>

                    <p class="text-xl  text-center font-semibold text-gray-700">
                        ${word.meaning} / ${word.pronunciation}
                    </p>
                </div>

                <div class="flex justify-between">
                    <button
                        class="  bg-blue-100 transition-colors p-2">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>

                    <button
                        class="  bg-blue-100 transition-colors p-2">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>

            </div>
        </div>
        `
        wordContainer.append(wordDiv)
    })


}
