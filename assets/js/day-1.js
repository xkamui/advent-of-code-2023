let calibration = null
const fileTXT = '/puzzle-input.txt'

Promise.all([
    fetch(fileTXT).then(x => x.text()),
]).then(([calibration]) => {
    parsePuzzleInput(calibration)
});

function parsePuzzleInput(puzzle) {

    const lines = puzzle.split('\n')
    let sum = 0

    lines.map(line => {
        let num = null
        line = line.replace(/\D/g,'');
        
        if (line.length > 2 || line.length === 1) {
            let str = line.charAt(0) + line.charAt(line.length -1)
                num = str
        } else {
            num = line
        }

        sum += parseInt(num)

    })

    document.querySelector('#resultDay1').textContent = sum
    
}