function verify(client, message) {
  let role = message.guild.roles.cache.find(r => r.name === "familiar");
  message.member.roles.add(role).catch(console.error);
  let rm = message.guild.roles.cache.find(r => r.name === "stranger");
  message.member.roles.remove(rm).catch(console.error);
}
module.exports = verify;
