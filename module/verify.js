function verify(client, message, author) {
  let msg = message;
  let auth = author;
  let role = msg.guild.roles.cache.find(r => r.name === "familiar");
  msg.member.roles.add(role).catch(console.error);
  let rm = msg.guild.roles.cache.find(r => r.name === "stranger");
  msg.member.roles.remove(rm).catch(console.error);
}
module.exports = verify;
