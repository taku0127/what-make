export type Problem = {
    id: number,
    problem: string,
    purpose: string,
    user_id: number,
    created_at: string,
    updated_at: string,
    user?: User,
    comments?: Comment[]
    comments_count?: number,
    likes_count?: number,
    products?: Product[]
}
export type Comment = {
    id: number,
    comment: string,
    user_id: number,
    problem_id: number,
    created_at: string,
    updated_at: string,
    user:User,
}

export type User = {
    id: number,
    name: string,
    created_at: string,
    updated_at: string
}

export type Product = {
    id: number,
    url: string,
    user_id: number,
    problem_id: number,
    created_at: string,
    updated_at: string,
    user?: User,
    problem?: Problem,
}
