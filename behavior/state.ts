namespace State {

  class TCPState {
    protected constructor() { }

    private static instance: TCPState;

    public static get Instance() {
      return this.instance || (this.instance = new this());
    }

    changeState(tcpConnection: TCPConnection, state: TCPState) {
      tcpConnection.changeState(state);
    }

    activeOpen(tcpConnection: TCPConnection) { }

    passiveOpen(tcpConnection: TCPConnection) { }

    close(tcpConnection: TCPConnection) { }
  }

  class TCPEstablished extends TCPState {
    close(tcpConnection: TCPConnection) {
      this.changeState(tcpConnection, TCPClosed.Instance)
    }
  }

  class TCPListen extends TCPState {

  }

  class TCPClosed extends TCPState {
    activeOpen(tcpConnection: TCPConnection) {
      this.changeState(tcpConnection, TCPEstablished.Instance)
    }

    passiveOpen(tcpConnection: TCPConnection) {
      this.changeState(tcpConnection, TCPListen.Instance)
    }
  }

  class TCPConnection {
    constructor() {
      this.state = TCPClosed.Instance;
    }

    private state: TCPState;

    changeState(state: TCPState) {
      this.state = state;
    }

    activeOpen() {
      this.state.activeOpen(this);
    }

    close() {
      this.state.close(this);
    }
  }
}