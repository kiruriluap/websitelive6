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
    res.render('add',{title: 'Add Business List', page: 'business-list',  displayName: UserDisplayName(req)});
});

/**get route for processing the add page **/
router.get('/add', (req, res, next)=> {
    let newBusinessList = business ({
        "name": req.body.name,
        "number": req.body.number,
        "address": req.body.address
    });
    BusinessList.create(newBusinessList, (err, BusinessList)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //reflesh list 
            res.redirect('business-list');
        }
    });
});

/**get route for display the edit page **/
router.get('/edit:id', (req, res, next)=> {
    let id = req.params.id;

    BusinessList.findById(id, (err, businessListToEdit)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //reflesh list
            res.render('edit', {title: 'Edit Business List', businessList: businessListToEdit,  displayName: UserDisplayName(req)});
        }

    });
});

/**get route for processing the edit page **/
router.post('/edit:id', (req, res, next)=> {
    let id= req.params.id

    let updatedBusinessList= BusinessList({
        "_id":id,
        "name": req.body.name,
        "number": req.body.number,
        "address": req.body.address

    });
    BusinessList.updateOne({_id: id}, updatedBusinessList, (err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('business-list')
        }
    });
    ;
})

/**get to perform deletion **/
router.get('/delete:id', (req, res, next)=> {
    let id= req.params.id

    BusinessList.remove({_id: id},  (err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh
            res.redirect('business-list')
        }
    });
});