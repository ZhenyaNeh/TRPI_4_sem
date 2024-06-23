enum Membership{
    Simple, 
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia{
    VK = 'VK',
    FACEBOOK = 'Facebook',
    INSTAGRAM = 'Instagram'
}

const social = SocialMedia.INSTAGRAM
console.log(social)