module.exports = {
    goodData: {
        testOne: {
            header: '132456789',
            mke: 'A@',
            ori: '123456789',
            name: 'Steve Rodgers',
            sex: 'M',
            race: 'W',
            height: '600',
            weight: '205',
            hair: 'Brown',
            offense: 'Treason',
            date: '05062016',
            dl: '',
            dlState: '',
            dlExpiration: '',
            lp: '',
            lpState: '',
            lpExpiration: ''
        },
        dlTest: {
            header: '132456789',
            mke: 'A@',
            ori: '123456789',
            name: 'Wanda Marya Maximoff',
            sex: 'F',
            race: 'S',
            height: '506',
            weight: '130',
            hair: 'Red',
            offense: 'WitchCraft',
            date: '05062017',
            dl: 'RO987654321',
            dlState: 'MD',
            dlExpiration: '11192017',
            lp: '',
            lpState: '',
            lpExpiration: ''
        },
        lpTest: {
            header: '132456789',
            mke: 'A@',
            ori: '123456789',
            name: 'Logan',
            sex: 'M',
            race: 'C',
            height: '602',
            weight: '550',
            hair: 'Dark',
            offense: 'Body Mod',
            date: '10061968',
            dl: '',
            dlState: '',
            dlExpiration: '',
            lp: 'W0lvr1n3',
            lpState: 'WA',
            lpExpiration: '09302017'
        },
        allTest: {
            header: '132456789',
            mke: 'A@',
            ori: '123456789',
            name: 'Thor',
            sex: 'U',
            race: 'A',
            height: '604',
            weight: '280',
            hair: 'Blonde',
            offense: 'Immigration',
            date: '05062011',
            dl: 'AZ45873158',
            dlState: 'AZ',
            dlExpiration: '01012017',
            lp: '4Z64RD',
            lpState: 'AZ',
            lpExpiration: '02292017'
        },
        minCharTest: {
            header: '132456789',
            mke: 'A@',
            ori: '123456789',
            name: 'Ben',
            sex: 'M',
            race: 'J',
            height: '509',
            weight: '005',
            hair: 'Whi',
            offense: 'JediK',
            date: '01011900',
            dl: 'A',
            dlState: 'CA',
            dlExpiration: '05251977',
            lp: '4Z64R',
            lpState: 'TN',
            lpExpiration: '02292017'
        },
        maxCharTest: {
            header: '132456789 !@#AbD789',
            mke: 'A@ _',
            ori: '123456789',
            name: 'Thor ThursGood Ernstein III jr',
            sex: 'M',
            race: 'd',
            height: '604',
            weight: '275',
            hair: 'LongBlonde',
            offense: 'Space !mmigrant',
            date: '01022018',
            dl: 'AZ45873158 D3m1-G0D_',
            dlState: 'AZ',
            dlExpiration: '01012017',
            lp: 'ABC456YZ',
            lpState: 'AZ',
            lpExpiration: '02292017'
        }

    },
    expectedString: {
        testOne: '132456789.A@.123456789.Steve Rodgers.M.W.600.205.Brown.Treason.05062016......',
        dlTest: '132456789.A@.123456789.Wanda Marya Maximoff.F.S.506.130.Red.WitchCraft.05062017.RO987654321.MD.11192017..',
        lpTest: '132456789.A@.123456789.Logan.M.C.602.550.Dark.Body Mod.10061968....W0lvr1n3.WA.09302017',
        allTest: '132456789.A@.123456789.Thor.U.A.604.280.Blonde.Immigration.05062011.AZ45873158.AZ.01012017.4Z64RD.AZ.02292017',
        minCharTest: '132456789.A@.123456789.Ben.M.J.509.005.Whi.JediK.01011900.A.CA.05251977.4Z64R.TN.02292017',
        maxCharTest: '132456789 !@#AbD789.A@ _.123456789.Thor ThursGood Ernstein III jr.M.d.604.275.LongBlonde.Space !mmigrant.01022018.AZ45873158 D3m1-G0D_.AZ.01012017.ABC456YZ.AZ.02292017'
    }
}