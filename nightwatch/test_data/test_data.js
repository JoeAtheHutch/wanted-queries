module.exports = {
    goodData: {
        basicTest: {
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
            ori: 'LATV65789',
            name: 'Wanda Marya Maximoff',
            sex: 'F',
            race: 'S',
            height: '506',
            weight: '130',
            hair: 'Red',
            offense: 'WitchCraft',
            date: '05062017',
            dl: 'RO987654321',
            dlState: 'DC',
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
    validCancel: {
        minChar: {
            warrantID: '9876543210',
            reason: 'Apathy inc',
            cancelDate: '01042018'
        },
        maxChar: {
            warrantID: '9876543210',
            reason: 'A culture of institutionalized bureaucracy led to attitudes procedure over evaluation of the situation and application of the original meaning of regs',
            cancelDate: '01042018'
        }
    },
    invalidCancel: {
        lowChar: {
            warrantID: '9876543210',
            reason: 'ApathyInc',
            cancelDate: '01042018'
        },
        highChar: {
            warrantID: '9876543210',
            reason: 'An culture of institutionalized bureaucracy led to attitudes procedure over evaluation of the situation and application of the original meaning of regs',
            cancelDate: '01042018'
        }
    },
    cancelQueries: {
        minChar: '9876543210.Apathy inc.01042018',
        maxChar: '9876543210.A culture of institutionalized bureaucracy led to attitudes procedure over evaluation of the situation and application of the original meaning of regs.01042018'
    },
    cancelErrors: {
        reason: 'The "Reason for Cancellation" field should be between 10 and 150 characters long.',
        date: `The "Date of Cancellation" field must be entered as a date, MMDDYYYY, no earlier than 01011900 and no later than today's date.`
    },
    modifyData: {
        warrantID: {
            id: '0123456789'
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
        },
        dlTest: {
            dl: 'AZ45873158',
            dlState: 'AZ',
            dlExpiration: '01012017',
            lp: '4Z64RD',
            lpState: 'AZ',
            lpExpiration: '02292017'
        },
        queryStrings: {
            header: '0123456789.132456789.......000.........',
            mke: '0123456789..A@......000.........',
            ori: '0123456789...123456789.....000.........',
            name: '0123456789....Thor....000.........',
            sex: '0123456789.....U...000.........',
            race: '0123456789......A..000.........',
            height: '0123456789.......604.000.........',
            weight: '0123456789........280.........',
            hair: '0123456789........000.Blonde........',
            offense: '0123456789........000..Immigration.......',
            date: '0123456789........000...05062011......',
            dl: '0123456789........000....AZ45873158.AZ.01012017...',
            lp: '0123456789........000.......4Z64RD.AZ.02292017'
        }
    },
    expectedString: {
        basicTest: '132456789.A@.123456789.Steve Rodgers.M.W.600.205.Brown.Treason.05062016......',
        dlTest: '132456789.A@.LATV65789.Wanda Marya Maximoff.F.S.506.130.Red.WitchCraft.05062017.RO987654321.DC.11192017..',
        lpTest: '132456789.A@.123456789.Logan.M.C.602.550.Dark.Body Mod.10061968....W0lvr1n3.WA.09302017',
        allTest: '132456789.A@.123456789.Thor.U.A.604.280.Blonde.Immigration.05062011.AZ45873158.AZ.01012017.4Z64RD.AZ.02292017',
        minCharTest: '132456789.A@.123456789.Ben.M.J.509.005.Whi.JediK.01011900.A.CA.05251977.4Z64R.TN.02292017',
        maxCharTest: '132456789 !@#AbD789.A@ _.123456789.Thor ThursGood Ernstein III jr.M.d.604.275.LongBlonde.Space !mmigrant.01022018.AZ45873158 D3m1-G0D_.AZ.01012017.ABC456YZ.AZ.02292017'
    },
    expectedError: {
        length: {
            header: 'The "Header" field should be between 9 and 19 characters long.',
            mke: 'The "MKE" field should be between 2 and 4 characters long.',
            ori: 'The "Originating Agency Identifier" field should be 9 characters long.',
            name: 'The "Name" field should be between 3 and 30 characters long.',
            sex: 'The "Sex" field should be 1 character long.',
            race: 'The "Race" field should be 1 character long.',
            height: 'The "Height" field should be 3 characters long.',
            weight: 'The "Weight" field should be between 1 and 3 characters long.',
            hair: 'The "Hair" field should be between 3 and 10 characters long.',
            offense: 'The "Offense" field should be between 5 and 15 characters long.',
            date: 'The "Date of Warrant/Violation" field should be 8 characters long.',
            dl: 'The "Drivers License" field should be between 1 and 20 characters long.',
            dlState: 'The "DL State" field should be 2 characters long.',
            dlExpiration: 'The "DL Expiration Date" field should be 8 characters long.',
            lp: 'The "License Plate" field should be between 5 and 8 characters long.',
            lpState: 'The "License State" field should be 2 characters long.',
            lpExpiration: 'The "License Expiration Date" field should be 8 characters long.'

        },
        invalidChar: {
            mke: 'The "MKE" field can only include characters from the English Alphabet or special characters.',
            ori: 'The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.',
            sex: 'The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown.',
            race: 'The "Race" field can only include characters from the English Alphabet.',
            height: 'The "Height" field can only include numeric characters.',
            weight: 'The "Weight" field can only include numeric characters.',
            hair: 'The "Hair" field can only include characters from the English Alphabet.',
            date: 'The "Date of Warrant/Violation" field should be 8 characters long.',
            dlState: 'The "DL State" field can only include a valid State/Territory abbreviation.',
            dlExpiration: 'The "DL Expiration Date" field should be 8 characters long.',
            lp: 'The "License Plate" field can only include characters from the English Alphabet or numeric characters.',
            lpState: 'The "License State" field can only include a valid State/Territory abbreviation.',
            lpExpiration: 'The "License Expiration Date" field should be 8 characters long'
        },
        dlIncomplete: {
            message: 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date'
        },
        lpIncomplete: {
            message: 'If one of the following are present, all must be present: License Plate, License State, License Expiration Date.'
        }
    },
    badData: {
        shortVal: {
            header: '13245678',
            mke: 'A',
            ori: '12345678',
            name: 'Ed',
            height: '60',
            hair: 'Bl',
            offense: 'Take',
            date: '0102201',
            dlState: 'A',
            dlExpiration: '0101201',
            lp: 'ABC4',
            lpState: 'A',
            lpExpiration: '0229201'
        },
        longVal: {
            header: '132456789 !@#AbD789"',
            mke: 'A@ _$',
            ori: '1234567890',
            name: 'Thor ThursGood Ernstein III jr.',
            sex: 'Mn',
            race: 'dH',
            height: '6041',
            weight: '2753',
            hair: 'DirtyBlonde',
            offense: 'Space !mmigrant.',
            date: '010220180',
            dl: 'AZ45873158 D3m1-G0D_!',
            dlState: 'AZG',
            dlExpiration: '010152017',
            lp: 'ABC456YZs',
            lpState: 'AZG',
            lpExpiration: '022952017'
        },
        invalidChar: {
            specialChar: {
                ori: '1234567@!',
                sex: '$',
                race: '@',
                height: '60*',
                weight: '27^',
                hair: 'D!rty',
                date: '010$$0180',
                dlState: '@^',
                dlExpiration: '()0152017',
                lp: 'ABC4!@#',
                lpState: '%|',
                lpExpiration: '0229520|7'
            },
            alpha: {
                sex: '2',
                race: '1',
                height: '60a',
                weight: '27b',
                date: '010ab0180',
                dlExpiration: 'ab0152017',
                lpExpiration: '022952ab7'
            },
            numeric: {
                mke: 'A@23',
                sex: '6',
                race: '2',
                hair: 'D45rty',
                dlState: '45',
                lpState: '32'
            }
        },

    }
}