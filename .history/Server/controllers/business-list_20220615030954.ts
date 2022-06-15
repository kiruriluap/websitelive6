import express from 'express';

import Business from '../Models/business';

import { UserDisplayName } from '../../Util';
import router from '../Routes';

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
/**get route for display the add page */
router.get('/add', (req, res, next)=> {
    res.render('add',{title: 'Business List', page: 'business-list', businesses: businessesCollection, displayName: UserDisplayName(req)});
})

/**get route for processing the add page */
router.get('/add', (req, res, next)=> {
    res.render('index',{title: 'Business List', page: 'business-list', businesses: businessesCollection, displayName: UserDisplayName(req)});
})

/**get route for display the edit page */
router.get('/edit:id', (req, res, next)=> {
    res.render('index',{title: 'Business List', page: 'business-list', businesses: businessesCollection, displayName: UserDisplayName(req)});
})

/**get route for processing the edit page */
router.post('/edit:id', (req, res, next)=> {
    res.render('index',{title: 'Business List', page: 'business-list', businesses: businessesCollection, displayName: UserDisplayName(req)});
})

/**get to perform deletion */
router.get('/delete:id', (req, res, next)=> {

})