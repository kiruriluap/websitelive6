import express from 'express';

import Business from '../Models/business';

imp

export function DisplayBusinessList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Business.find(function(err, businessesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index',{title: 'Business List', page: 'business-list', businesses: businessesCollection, displayName: UserDisplayName(req)});
    });
}