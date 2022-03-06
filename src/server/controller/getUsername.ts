import * as os from 'os';

exports.getUsername = (
  req: string,
  res: { send: (arg0: { username: string; }) => string; }
) => res.send({
  username: os.userInfo().username
});
