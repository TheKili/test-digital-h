import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';
import { getAllUser } from './user-store';
import {emulateLongProcess} from './emulate-long-process'


export const getUsersBadge = async ( user: User ):Promise <Icon | null> => {

  await emulateLongProcess();
  const {solutionCount} = user;

  if ( solutionCount > 2000 ) return Icon.BADGE_GODLIKE;
  if ( solutionCount > 100 )  return Icon.BADGE_PLATINUM;
  if ( solutionCount >= 50 )  return Icon.BADGE_GOLD;
  if ( solutionCount >= 25 )  return Icon.BADGE_SILVER;
  if ( solutionCount >= 5)    return Icon.BADGE_BRONZE;
  if ( solutionCount > 1)     return Icon.BADGE_STARTER;
  if ( solutionCount < 0)     return Icon.BADGE_BADASS;
  return null ;

};

async function calculateUsersStatistics() {
const allUsers = await getAllUser()
let userBadges = allUsers.map(user =>  getUsersBadge(user))
console.log("number of users: ", allUsers.length)
console.log("average userCount: ", allUsers.reduce( (sum, d) => sum + d.solutionCount,0) / allUsers.length )
console.log("top five users: ", allUsers.sort((a,b) => b.solutionCount - a.solutionCount ).slice(0,5) )



let badgeCount = Promise.all(userBadges).then(
                      userBadges =>
                      userBadges.reduce( (acc, curr) =>
                      acc.has(curr) ? acc.set(curr, acc.get(curr)+ 1) : acc.set(curr,1),
                      new Map())
                        )
badgeCount.then( badgeCount =>
  console.log("badge count: ", [...badgeCount.entries()]
  .reduce((a, e ) => e[1] > a[1] ? e : a)[0]))
console.log("code further down the road")
}

calculateUsersStatistics();
