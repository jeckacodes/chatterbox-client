var MessageView = {
  render: _.template(`
      <div class="chat">
        <div class="<%-username%> username <%-roomname%>"><%-username%></div>
        <div class="body"><%-text%></div>
      </div>
    `)

};