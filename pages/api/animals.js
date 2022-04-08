export default function animals(req, res) {
    const animals = [
        'cat',
        'dog',
        'capybara',
        'pangolin',
        'bull',
        'guine pig',
        'armadillo'
    ]

    // get a random list of animals
    const rando = animals[Math.floor(Math.random() * animals.length)]
    res.status(200).json({rando})
}