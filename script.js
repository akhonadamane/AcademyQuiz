/* script.js */
function submitQuiz() {
    const answers = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "a",
        q5: "b"
    };
    let score = 0;
    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }
    document.getElementById("result").innerText = `Your score: ${score}/5`;
}