<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    /**
     * Display admin dashboard data.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Get dashboard statistics
        $totalUsers = User::count();
        $activeUsers = User::where('role', 'user')->count();
        
        // For demo purposes, we're returning mock transaction data
        // In a real application, this would come from a transactions table
        $totalTransactions = 125; // Mock data
        
        return response()->json([
            'totalUsers' => $totalUsers,
            'activeUsers' => $activeUsers,
            'totalTransactions' => $totalTransactions,
        ]);
    }
    
    /**
     * Get all users.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getUsers()
    {
        $users = User::select('id', 'name', 'email', 'role', 'created_at')
            ->orderBy('created_at', 'desc')
            ->get();
            
        return response()->json($users);
    }
}
