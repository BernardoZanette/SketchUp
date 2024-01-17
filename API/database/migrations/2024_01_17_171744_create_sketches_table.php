<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sketches', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');

            $table->id();
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('title');
            $table->string('image');
            $table->string('concept');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sketches');
    }
};
