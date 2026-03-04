const loadLessons = () => {
    const url = 'https://openapi.programming-hero.com/api/levels/all'

    fetch(url)
        .then(res => res.json())
        .then(json => {

            setLessonData(json.data)
        })
}
loadLessons()

const setLessonData = (lessions) => {
    const lessionDiv = document.getElementById('lessions')
    lessionDiv.innerHTML = ''
    lessions.forEach(lesson => {
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
                             <button id="lesson-btn-${lesson.level_no}" onclick = "btnCard(${lesson.level_no})" class="btn btn-outline btn-secondary btn-active-remove">
                            <i class="fa-solid fa-book-open"></i>
                            Learn- ${lesson.level_no} </button>
        `
        lessionDiv.append(btnDiv)
    });
}
const removeActive = () => {
    const getButton = document.querySelectorAll(".btn-active-remove")

    getButton.forEach(btn=>{
        btn.classList.remove('active')
    })
   
    
}

const btnCard = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            removeActive()
            const activeBtn = document.getElementById(`lesson-btn-${id}`)
            activeBtn.classList.add('active')
            console.log(activeBtn);
            displayLevelWord(json.data)
        })
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('wordContainer')
    wordContainer.innerHTML = ''
    if (words.length === 0) {
        wordContainer.innerHTML = `

        <div class="text-center col-span-full space-y-5 hind-siliguri-bangla lg:py-16">
        <i class="fa-solid fa-triangle-exclamation text-6xl text-black/50 "></i>
            <p class="text-2xl font-bold text-black/50 ">এই lesson এ এখনও কোনো Vocabulary যুক্ত করা হয়নি</p>
            <p class="text-4xl font-bold text-black/80"> অন্য একটি Lesson Select করুন।</p>
        </div>`
        return
    }
    words.forEach(word => {
        const wordDiv = document.createElement('div')

        wordDiv.innerHTML = `
         <div class="  p-1 h-full">
            <div class="flex flex-col gap-5 justify-between h-full w-full max-w-lg  bg-white  rounded-sm shadow-sm p-4 ">
                <div class="text-center space-y-5 ">
                    <h1 class="text-xl font-bold text-black ">${word.word ? word.word : 'Word পাওয়া যায়নি'} </h1>

                    <p class="text-sm font-medium text-black "> Meaning / Pronounciation</p>

                    <p class="text-xl  text-center font-semibold text-gray-700">
                        ${word.meaning ? word.meaning : 'meaning পাওয়া যায়নি'} / ${word.pronunciation ? word.pronunciation : 'pronunciation পাওয়া যায়নি'}
                    </p>
                </div>

                <div class="flex justify-between">
                    <button
                        class="  bg-pink-50 hover:bg-pink-200 transition duration-300 rounded-sm p-2">
                        <i class="fa-solid fa-circle-info"></i>
                    </button>

                    <button
                        class="  bg-pink-50 hover:bg-pink-200 transition duration-300 rounded-sm p-2">
                        <i class="fa-solid fa-volume-high"></i>
                    </button>
                </div>

            </div>
        </div>
        `
        wordContainer.append(wordDiv)
    })


}
