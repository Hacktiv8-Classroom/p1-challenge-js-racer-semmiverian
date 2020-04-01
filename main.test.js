// DILARANG MENGUBAH ISI DI DALAM FILE INI

const solution = require('./index')

process.argv = ["node", "jest", 2, 15]

expect.extend({
	toBeType(received, argument) {
		const initialType = typeof received;
		const type = initialType === "object" ? Array.isArray(received) ? "array" : initialType : initialType;
		return type === argument ? {
			message: () => `expected ${received} to be type ${argument}`,
			pass: true
		} : {
			message: () => `expected ${received} to be type ${argument}`,
			pass: false
		};
	}
});

describe("solution.numPlayers", () => {
  const argv = solution.numPlayers()

  it("should get the value from process.argv", () => {
    expect(argv).toBeType("array")
  })
  it("should have more than 2 players", () => {
    expect(argv[0]).toBeGreaterThanOrEqual(2)
  })
})

describe("solution.boardLength", () => {
  const argv = solution.boardLength()

  it("should get the value from process.argv", () => {
    expect(argv).toBeType("array")
  })
  it("should have at least 15 length board length", () => {
    expect(argv[0]).toBeGreaterThanOrEqual(15)
  })
})

describe("solution.diceRoll", () => {
  const expectedValue = [1, 2, 3, 4, 5, 6]

  it("should have a diceRoll function", () => {
    expect(typeof solution.diceRoll).toBe("function")
  })

  it('should return value from 1 to 6', () => {
    const value = solution.diceRoll()
    expect(expectedValue).toContain(value)
  });

  it('should return error if value is more than 6', () => {
    const value = 7
    expect(expectedValue).not.toContain(value)
  })
})

describe("solution.plotPlayer", () => {
  it("should have plotPlayer function", () => {
    expect(typeof solution.plotPlayer).toBe("function")
  })
  it("should print correct initial player data", () => {
    const arr = []
    const numPlayers = solution.numPlayers()[0]

    for (let a = 0; a < numPlayers; a++) {
      arr.push([String.fromCharCode(a + 65), 0])
    }
    expect(arr.length).toEqual(numPlayers)
    expect(arr).toEqual([["A", 0], ["B", 0]])
  })
})

describe("solution.printLine", () => {
  const arr = []
  const numPlayers = solution.numPlayers()[0]
  const boardLength = solution.boardLength()[0]

  it("should have printLine function", () => {
    expect(typeof solution.printLine).toBe("function")
  })

  test("should print board with player data", () => {
    const value1 = solution.printLine("A", 0, 15)
    const value2 = solution.printLine("G", 4, 17)
    const value3 = solution.printLine("D", 6, 15)
    expect(value1).toEqual("|A| | | | | | | | | | | | | | |")
    expect(value2).toEqual("| | | | |G| | | | | | | | | | | | |")
    expect(value3).toEqual("| | | | | | |D| | | | | | | | |")
  })

})

describe("solution.finished", () => {
  it("should have finished function", () => {
    expect(typeof solution.finished).toBe("function")
  })

  it("should reach end of the game", () => {
    const playerData = [[ 'A', 2 ], [ 'B', 15 ]]

    const value1 = solution.finished(playerData)
    expect(value1).toEqual(true)
  })
  it("should continue the game until one of the player finished", () => {
    const playerData = [[ 'A', 2 ], [ 'B', 10 ]]

    const value1 = solution.finished(playerData)
    expect(value1).toEqual(false)
  })
})

describe("solution.winner", () => {
  it("should have winner function", () => {
    expect(typeof solution.winner).toBe("function")
  })

  it("there should be the winner", () => {
    const playerData = [[ 'A', 2 ], [ 'B', 15 ]]
    const playerData2 = [[ 'A', 15 ], [ 'B', 1 ]]

    const value1 = solution.winner(playerData)
    const value2 = solution.winner(playerData2)
    expect(value1).toEqual("My man B crushed the competition")
    expect(value2).toEqual("My man A crushed the competition")
  })
  it("should continue the game until one of the player finished", () => {
    const playerData = [[ 'A', 2 ], [ 'B', 10 ]]

    const value1 = solution.winner(playerData)
    expect(value1).toEqual(false)
  })
})

describe("solution.advance", () => {
  it("should update the player position based on diceRoll", () => {
    const playerData = [[ 'A', 2 ], [ 'B', 10 ]]
    const diceRoll = solution.diceRoll()
    const updatedPosition = playerData[0][1] + diceRoll
    playerData[0][1] = updatedPosition

    expect(playerData).toEqual([[ 'A', 2 + diceRoll ], [ 'B', 10 ]])
  })

  it("should be stop the game if the player reach the end of the track", () => {
    const playerData = [[ 'A', 2 ], [ 'B', 10 ]]
    const dice1 = 2
    const dice2 = 5
    playerData[0][1] = playerData[0][1] + dice1
    playerData[1][1] = playerData[1][1] + dice2

    const value1 = solution.advance(playerData, 0)
    const value2 = solution.advance(playerData, 1)

    expect(value1).toEqual(false)
    expect(value2).toEqual(true)
  })
})
