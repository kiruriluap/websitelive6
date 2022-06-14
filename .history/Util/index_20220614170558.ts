import express from 'express';

//return display name of user
export function UserDisplayName(req: Express.Request): string
{
    if (req.user)
    {
        let user=req.user as UserDocument
        return user.
    }
}