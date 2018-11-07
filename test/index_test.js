describe("fetchBoard", () => {
  beforeEach(() => {
    spyOn(window, "fetch").and.callThrough()
    fetchBoard()
  })

  it("fetches from the TicTacToeRubyRails API", () => {
    expect(window.fetch).toHaveBeenCalledWith("https://live-ttt-rubyrails-api.herokuapp.com/v1/game")
  })
})
