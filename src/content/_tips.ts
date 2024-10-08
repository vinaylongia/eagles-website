export const tips: string[] = [
  "Communication is key, always talk to your team. If you're not sure about something asking questions is never a bad idea!",
  "When played well touch is a very fast game great for fitness.",
  "When attacking it's always a good idea for supporting players to 'come from depth' or stand behind the player with the ball otherwise they cannot be passed to.",
  "The best form of defense is a flat line of players stood laterally across the pitch.",
  "Don't be afraid to hold on to the ball and take a touch, it's almost always better to take a touch than throw the ball away.",
  "After being touched, when playing the ball, it's best to step a metre or two beyond the ball to clear space for the dummy half to pick up the ball on the run.",
  "Kicking of the ball (or other players) is not allowed.",
  "If a player is touched within 7 metres of their opponent's tryline they are welcome to retreat and play the ball 7 metres away from the tryline.",
  "When defending players are forced back to their own tryline they cannot remain on the line when the ball is played. They must walk forwards off the the tryline.",
  "There are no penalties or yellow cards given for defending players slapping the ball down however the attacking team's touch count is reset to zero.",
];

interface AdvancedTip {
  tip: string;
  def: string;
}

export const advancedTips: AdvancedTip[] = [
  {
    tip: "initiating Initiating the touch",
    def: "In order to speed up the play of the ball a player can touch defending players to initiate the touch. An experienced player can, on the run, touch a defending player, place the ball and step over it all in one fluid action. If done well this can be invaluable as the defending team will have to work harder to get back onside. You'll also find more experienced players will attempt to run past defenders to touch them from the side in order to steal an extra yard or two.",
  },
  {
    tip: "driving Driving",
    def: "In more structured games of touch rugby to build momentum and retain possession the attacking team will usually choose to drive the ball. For the first 3 tackles, using a pod of 3 players each acting in turn to take the ball forward, play dummy half and act as a first receiver easy metres can be made. This also tires the defending team while pulling them out of shape creating gaps in the defence. If done properly each successive drive can make more ground than the last. When games of touch are won and lost on possession and set completion driving is key to get the defense moving backwards. The success of a drive is dependent on the speed of the play of the ball and the timing of the dummy half and runners.",
  },
  {
    tip: "split Splitting",
    def: "A staple touch move where a player who is touched immediately plays the ball and steps to the left or right allowing the dummy half to pick up the ball, step in front, and pass back to him/her. This is often used during a two player drive or as a strike move close to the line as the dummy half can't score.",
  },
]
