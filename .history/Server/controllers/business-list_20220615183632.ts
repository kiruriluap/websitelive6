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

export function DisplayAddList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title: 'add Business List', page: 'add', displayName: UserDisplayName(req)});
}

export function ProcessAddList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let newBusiness = new Business
    ({
        "Name": req.body.username,
        "Number": req.body.number,
        "email": req.body.emailAddress
    });

    Business.create(newBusiness, function(err)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
};

export function DisplayEditList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index',{title: 'add Business List', page: 'add', displayName: UserDisplayName(req)});
}

export function ProcessEditList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let newBusiness = new Business
    ({
        "Name": req.body.username,
        "Number": req.body.number,
        "email": req.body.emailAddress
    });

    Business.create(newBusiness, function(err)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
};

// export function ProcessEditList(req: express.Request, res: express.Response, next: express.NextFunction)
// {
//     let newBusiness = new Business
//     ({
//         "Name": req.body.username,
//         "Number": req.body.number,
//         "email": req.body.emailAddress
//     });

//     Business.create(newBusiness, function(err)
//     {
//         if(err)
//         {
//             console.error(err);
//             res.end(err);
//         }
//         res.redirect('/register');
//     });
// };

// export function DisplayEditList(req: express.Request, res: express.Response, next: express.NextFunction)
// {
//     let newBusiness = new Business
//     ({
//         "Name": req.body.username,
//         "Number": req.body.number,
//         "email": req.body.emailAddress
//     });

//     Business.create(newBusiness, function(err)
//     {
//         if(err)
//         {
//             console.error(err);
//             res.end(err);
//         }
//         res.redirect('/register');
//     });
// };


/**get route for display the add page 
router.get('/add', (req, res, next)=> {
    res.render('add',{title: 'Add Business List', page: 'business-list',  displayName: UserDisplayName(req)});
});

/**get route for processing the add page 
router.get('/add', (req, res, next)=> {
    let newBusinessList = new Business ({
        "name": req.body.name,
        "number": req.body.number,
        "address": req.body.address
    });
    Business.create(newBusinessList, (err, BusinessList)=>{
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

/**get route for display the edit page 
router.get('/edit:id', (req, res, next)=> {
    let id = req.params.id;

    Business.findById(id, (err: any, businessListToEdit: any)=> {
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

/**get route for processing the edit page 
router.post('/edit:id', (req, res, next)=> {
    let id= req.params.id

    let updatedBusinessList= new Business({
        "_id":id,
        "name": req.body.name,
        "number": req.body.number,
        "address": req.body.address

    });
    Business.updateOne({_id: id}, updatedBusinessList, (err: any)=> {
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

/**get to perform deletion 
router.get('/delete:id', (req, res, next)=> {
    let id= req.params.id

    Business.remove({_id: id},  (err)=> {
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
});**/