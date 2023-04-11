export class TennisGame {
    score: string = '';

    private readonly scoreLove = 0;

    private readonly scoreFifteen = 1;

    private readonly scoreThirty = 2;

    private readonly scoreForty = 3;

    getScore(player1Name: string,
             player2Name: string,
             player1Score: number,
             player2Score: number) {
        let tempScore = 0;

        if (player1Score == player2Score) {
            this.whenDraw(player1Score);
        } else if (player1Score >= 4 || player2Score >= 4) {
            this.whenDeuce(player1Score, player2Score);
        } else {
            this.whenContesting(tempScore, player1Score, player2Score);
        }
    }

    private whenContesting(tempScore: number, player1Score: number, player2Score: number) {
        for (let i = 1; i < 3; i++) {
            if (i == 1) tempScore = player1Score;
            else {
                this.score += "-";
                tempScore = player2Score;
            }
            switch (tempScore) {
                case this.scoreLove:
                    this.score += "Love";
                    break;
                case this.scoreFifteen:
                    this.score += "Fifteen";
                    break;
                case this.scoreThirty:
                    this.score += "Thirty";
                    break;
                case this.scoreForty:
                    this.score += "Forty";
                    break;
            }
        }
    }

    private whenDeuce(player1Score: number, player2Score: number) {
        let minusResult = player1Score - player2Score;
        if (minusResult == 1) this.score = "Advantage player1";
        else if (minusResult == -1) this.score = "Advantage player2";
        else if (minusResult >= 2) this.score = "Win for player1";
        else this.score = "Win for player2";
    }

    private whenDraw(player1Score: number) {
        switch (player1Score) {
            case this.scoreLove:
                this.score = "Love-All";
                break;
            case this.scoreFifteen:
                this.score = "Fifteen-All";
                break;
            case this.scoreThirty:
                this.score = "Thirty-All";
                break;
            case this.scoreForty:
                this.score = "Forty-All";
                break;
            default:
                this.score = "Deuce";
                break;

        }
    }
}
