<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\QType;

class QTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        QType::create([
            'name' => "text",
        ]);
        QType::create([
            'name' => "dropdown",
        ]);
        QType::create([
            'name' => "date",
        ]);
        QType::create([
            'name' => "checkbox",
        ]);
        QType::create([
            'name' => "radio",
        ]);
        QType::create([
            'name' => "yesno",
        ]);
    }
}
