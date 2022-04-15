let game = {
    title: 'gol',
    gamers: ["messi", 'ronaldo', 'bekham', 'de Bruyne'],
    gol() {
        this.gamers.forEach(gol => {
            console.log(this.title, gol);
        })
    }
}

game.gol();