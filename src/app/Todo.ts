export class Todo{
    sno!: number
    title!: string
    desc!: string
    active!: boolean
}

// Prev. the format was this. It gave ‘…’ has no initializer and is not definitely assigned in the constructor.
// export class Todo{
//     sno: number
//     title: string
//     desc: string
//     active: boolean
// }
// Problem resolved by adding '!' as a suffix to childs.
// Issue created due to versioning. 