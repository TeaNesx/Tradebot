<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display user dashboard data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Get the authenticated user
        $user = request()->user();
        
        // For demo purposes, we're returning mock data
        // In a real application, this would come from database tables
        $dashboardData = [
            'accountBalance' => 5000.75,
            'activeStrategies' => 2,
            'recentTransactions' => [
                [
                    'id' => 1,
                    'type' => 'Einzahlung',
                    'amount' => 1000.00,
                    'date' => now()->subDays(2)->toISOString(),
                    'status' => 'completed'
                ],
                [
                    'id' => 2,
                    'type' => 'Kauf',
                    'amount' => 250.50,
                    'date' => now()->subDays(1)->toISOString(),
                    'status' => 'completed'
                ],
                [
                    'id' => 3,
                    'type' => 'Verkauf',
                    'amount' => 325.25,
                    'date' => now()->toISOString(),
                    'status' => 'pending'
                ]
            ]
        ];
        
        return response()->json($dashboardData);
    }
    
    /**
     * Get user profile data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getProfile()
    {
        $user = request()->user();
        
        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at,
        ]);
    }
}
