<?php

namespace App\Helpers;

class Constants{
    
    const DOCUMENT_STATUSES = array(
        [ "id"=> 1, "name"=> "Verified" ],
        [ "id"=> 2, "name"=> "Rejected" ],
        [ "id"=> 3, "name"=> "Pending Approval" ],
        [ "id"=> 4, "name"=> "Pending Submission" ],
        [ "id"=>5,  "name"=> "Missing"]
    );
      
      const DOCUMENT_TYPES = [
        [ "id"=> 1, "name"=> "SAR Form" ],
        [ "id"=> 2, "name"=> "Form 138 Grade 10" ],
        [ "id"=> 3, "name"=> "Form 138 Grade 11" ],
        [ "id"=> 4, "name"=> "Form 138 Grade 12" ],
        [ "id"=> 5, "name"=> "PSA Birth Certificate" ],
        [ "id"=> 6, "name"=> "Certificate of Good Moral/Completion" ],
        [ "id"=> 7, "name"=> "Undertaking" ],
        [ "id"=> 8, "name"=> "Medical Information Sheet" ],
        [ "id"=> 9, "name"=> "Form 137 SHS" ],
      ];
      
      const ROLES = [
        [ "id"=> 1, "name"=> "Head Registrar" ],
        [ "id"=> 2, "name"=> "Regular Staff" ],
        [ "id"=> 3, "name"=> "Student Assistant" ],
        [ "id"=> 4, "name"=> "Student" ],
      ];
      
      const STUDENT_STATUSES = [
        [ "id"=> 1, "name"=> "Complete" ],
        [ "id"=> 2, "name"=> "Incomplete" ],
        [ "id"=> 3, "name"=> "Pull-out" ],
        [ "id"=> 4, "name"=> "Transferee" ],
      ];
      
      const COURSES = [
        [
          "id"=> 1,
          "name"=> "Diploma in Civil Engineering Technology (DCvET)",
          "short_name"=> "DCvET",
        ],
        [
          "id"=> 2,
          "name"=> "Diploma in Computer Engineering Technology (DCET)",
          "short_name"=> "DCET",
        ],
        [
          "id"=> 3,
          "name"=> "Diploma in Electrical Engineering Technology (DEET)",
          "short_name"=> "DEET",
        ],
        [
          "id"=> 4,
          "name"=> "Diploma in Electronics Engineering Technology (DECET)",
          "short_name"=> "DECET",
        ],
        [
          "id"=> 5,
          "name"=> "Diploma in Information Communication Technology (DICT)",
          "short_name"=> "DICT",
        ],
        [ "id"=> 6, "name"=> "Diploma in Information Technology (DIT)", "short_name"=> "DIT" ],
        [
          "id"=> 7,
          "name"=> "Diploma in Mechanical Engineering Technology (DMET)",
          "short_name"=> "DMET",
        ],
        [
          "id"=> 8,
          "name"=> "Diploma in Office Management Technology (DOMT)",
          "short_name"=> "DOMT",
        ],
        [
          "id"=> 9,
          "name"=> "Diploma in Railway Engineering Technology (DRET)",
          "short_name"=> "DRET",
        ],
      ];
      

      
      
      
}