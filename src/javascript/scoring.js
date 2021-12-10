/**
 * 
 * Greed is a dice game where you roll up to five dice to accumulate points.
 * The following "score" function will be used to calculate the score of a single roll of the dice.
 * 
 * A greed roll is scored as follows:
 * 
 * * A set of three ones is 1000 points
 * * A set of three numbers (other than ones) is worth 100 times the
 *   number. (e.g. three fives is 500 points).
 * * A one (that is not part of a set of three) is worth 100 points.
 * * A five (that is not part of a set of three) is worth 50 points.
 * * Everything else is worth 0 points.
 * 
 * Examples:
 * 
 * score([1,1,1,5,1]) => 1150 points
 * score([2,3,4,6,2]) => 0 points
 * score([3,4,5,3,3]) => 350 points
 * score([1,5,1,2,4]) => 250 points
 * 
 * More scoring examples are given in the tests below:
 * Your goal is to write the score function.
 * 
 */

/**
 * It should return score of when dice rolled.
 * 
 * @param {Array} dice 
 * @returns {Number}
 */

const score = (dice) => {

};

describe('ScoringProject' , () => {
    it('#testScoreOfAnEmptyListIsZero', () => { 
        equal(0, score([]));
    });

    it('#testScoreOfASingleRollOf5Is50', () => { 
        equal(50, score([5]));
    });

    it('#testScoreOfASingleRollOf1Is100', () => { 
        equal(100, score([1]));
    });

    it('#testScoreOfMultiple1sAnd5sIsTheSumOfIndividualScores', () => { 
        equal(300, score([1,5,5,1]));
    });

    it('#testScoreOfSingle2s3s4sAnd6sAreZero', () => { 
        equal(0, score([2,3,4,6]));
    });

    it('#testScoreOfATriple1Is1000', () => { 
        equal(1000, score([1,1,1]));
    });

    it('#testScoreOfOtherTriplesIs100x', () => { 
        equal(200, score([2,2,2]));
        equal(300, score([3,3,3]));
        equal(400, score([4,4,4]));
        equal(500, score([5,5,5]));
        equal(600, score([6,6,6]));
    });

    it('#testScoreOfMixedIsSum', () => { 
        equal(250, score([2,5,2,2,3]));
        equal(550, score([5,5,5,5]));
        equal(1100, score([1,1,1,1]));
        equal(1200, score([1,1,1,1,1]));
        equal(1150, score([1,1,1,5,1]));
    });
});
